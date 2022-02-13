function a(){
    var v_a="a";
    function b(){
        var v_b ="b";
        console.log("b :",typeof(v),typeof(v_a),typeof(v_b));
        //그러니깐 자바스크립트의 변수 범위는 함수 안에서만 작동한다는 뜻! 
    }
}