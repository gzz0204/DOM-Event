/*封装事件处理对象（兼容浏览器）
包括获取事件，事件类型，事件绑定对象，添加、删除事件，阻止冒泡，阻止默认行为
*/

var eventHandle={
	//添加事件
	addEvent:function(ele,type,handler){
		//DOM2级
		if (ele.addEventListener){
			ele.addEventListener(type,handler,false);
		//IE
		}else if(ele.attchEvent){
			ele.attachEvent('on'+type,handler);
		//DOM0级
		}else{
			ele['on'+type]=handler;
		}
	},
	//添加事件
	removeEvent:function(ele,type,handler){
		//DOM2级
		if (ele.removeEventListener){
			ele.removeEventListener(type,handler,false);
		//IE
		}else if(ele.detachEvent){
			ele.detachEvent('on'+type,handler);
		//DOM0级
		}else{
			ele['on'+type]=null;
		}
	},
	//获取事件对象
	getEvent:function(event){
		return event?event:window.event;//IE支持window.event
	},
	//获取事件类型
	getType:function(event){
		return event.type;
	},
	//获取事件被绑定的对象
	getTarget:function(event){
		return event.target||event.srcElement;//IE支持srcElement
	},
	//阻止默认行为
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else if(event.returnValue){
			event.returnValue=false; //IE
		}
	},
	//阻止冒泡
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else if(event.cancelBubble){
			event.cancelBubble=true;
		}
	}
}


