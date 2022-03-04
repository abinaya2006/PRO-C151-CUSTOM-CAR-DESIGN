AFRAME.registerComponent("car",{
    schema:{
        model:{type:"string",default:"../car/scene.gltf"}
    },

    init:function(){
        this.el.setAttribute("gltf-model",this.data.model)
        position = { x: -1, y: 5, z: 12 };
        rotation = { x: 0, y: -100, z: 0 };
        scale={x:0.07 , y:0.07 ,z:0.07}
        this.el.setAttribute("position", position);
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("scale", scale);

    }
})