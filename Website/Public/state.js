
/**
 * @param
 * @param {[type]}
 */
function State(info, prediction=null) {
    this.info = info
}


/**
 * @return {the color of the corresponding state}
 */
State.prototype.color = function() {
	if(this.prediction == 0){
    	return 'blue'
	} else if (this.prediction == 1){
		return 'red'
    } else {
    	return 'purple'
    }

}
/**
 * @param  {[type]}
 * @return {[type]}
 */
State.prototype.id = function() {return this.info.attr('id')}
State.prototype.name = function() {return this.info.attr('title')}
State.prototype.node = function() {return this.info.node}
State.prototype.predictionRequest = function() {
    this.prediction = null//reset result in case of consecutive requests
	server = ""
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open('GET', server+'/prediction/'+this.id())
    xhr.onload = () => {
        this.prediction = xhr.response.prediction
        info = JSON.parse(xhr.response.parsedData)
        drawCountry()
    }
    xhr.send();


}

