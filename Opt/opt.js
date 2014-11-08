/**
 * Created by Rafael Barros Félix de Sousa
 * Licensed under Apache 2.0 Terms
 * 
 */

function opt(obj){
	if(obj === 'undefined' || obj == null){
		return new None();
	}else {
		return new Some(obj)
	}
}

function Some(obj){
	this.value = obj;
	this.map = function(aFunkt){
		return opt(aFunkt(value));
	}
	this.or = function(a){
		return this.value;
	}
	this.isEmpty  = false;
	
}

function None(){
	this.map = function(afunct){
		return this;
	}
	this.or = function(a){
		return a;
	}
	this.isEmpty = true
}