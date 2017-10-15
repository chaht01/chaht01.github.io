import React from 'react'

class NdfCircle extends React.Component{

    componentDidMount(){
        this.updateCanvas();
    }
    updateCanvas(){
        var canvas = document.getElementById('ndf');
        window.usermouse = {
            x:0, y:0
        }
        canvas.addEventListener('mousemove', onMouseMove,false);

        window.addEventListener('resize', function(){
            var ctx = canvas.getContext('2d');

            ctx.canvas.width = window.innerWidth
            ctx.canvas.height = window.innerWidth
        })



        function onMouseMove (event){
            window.usermouse = {
                x:event.offsetX,
                y:event.offsetY,
            }
        }

        function getRadius(ctx){
            var diameter = ctx.canvas.width/2;
            return diameter*2/5;
        }

        function PVector(x, y){
            this.x = x || 0;
            this.y = y || 0;
        }
        PVector.prototype.mag = function(){
            return Math.pow(Math.pow(this.x, 2) + Math.pow(this.y, 2), 1/2);
        }
        PVector.prototype.add = function (v) {
            this.x+=v.x;
            this.y+=v.y;
            return this;
        }
        PVector.prototype.sub = function (v) {
            this.x-=v.x;
            this.y-=v.y;
            return this;
        }
        PVector.prototype.mult = function (k) {
            this.x*=k;
            this.y*=k;
            return this;
        }
        PVector.prototype.divide = function (k) {
            if(k!=0){
                this.x/=k;
                this.y/=k;
            }
            return this;
        }
        PVector.prototype.normalize = function (v) {
            var size = this.mag();
            if(size!=0){
                this.x/=size;
                this.y/=size;
            }
            return this;
        }
        PVector.prototype.copy = function(){
            return new PVector(this.x, this.y);
        }
        PVector.add = function (v, u) {
            var r = new PVector();
            r.x = v.x+u.x;
            r.y = v.y+u.y;
            return r;
        }
        PVector.sub = function (v, u) {
            var r = new PVector();
            r.x = v.x-u.x;
            r.y = v.y-u.y;
            return r;
        }
        PVector.dot = function (v, u) {
            return v.x*u.x + v.y*u.y;
        }

        /**
         * DOT
         * @param angle
         * @param radius
         * @param outter
         * @constructor
         */
        function Dot(angle, radiusFn, outter, size){
            this.seen = true;
            this.size = Math.random()*size;

            this.angle = angle;
            this.radius = radiusFn;
            this.outter = outter;


            var colors = ['rgb(237,32,44)', 'rgb(75,183,72)', 'rgb(56,84,163']
            var colorRand = Math.random()*10;
            if(colorRand<2.5){
                this.color = colors[0];
            }else if(2.5<=colorRand &&  colorRand<7){
                this.color = colors[1];
            }else{
                this.color = colors[2];
            }
        }
        Dot.getCenter = function(){
            return new PVector(canvas.width/2, canvas.height/2);
        }
        Dot.prototype.contact = function(){
            if(!this.outter){
                if(PVector.sub(this.loc,Dot.getCenter()).mag()>this.radius()){ return true;}
            }else{
                if(PVector.sub(this.loc,Dot.getCenter()).mag()<this.radius()){ return true;}
            }
            return false;
        }
        Dot.prototype.constrainLoc = function () {
            if(this.contact()){
                this.seen = false;
            }else{
                this.seen = true;
            }
        }
        Dot.prototype.display = function (ctx) {
            if(this.seen){
                ellipse(ctx, this.loc, this.size, this.color)
            }
        }

        function ellipse(ctx, loc, size, color){
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(loc.x, loc.y, size, 0, Math.PI*2, false);
            ctx.fill();
        }





        var inset = [],
            outset = [];
        var innum = 2000,
            outnum = 2000;


        function init(){
            if(canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.canvas.width = window.innerWidth;
                ctx.canvas.height = window.innerWidth;
                window.requestAnimationFrame(draw.bind(this, ctx));
            }
        }

        function map (value, s1, d1, s2, d2) {
            var a = (d2-s2)/(d1-s1);
            return a*(value-s1)+s2;
        }

        function logMap(value, s1, d1, s2, d2) {
            s2 = Math.log(s2);
            d2 = Math.log(d2);
            return Math.exp(s2+(d2-s2)*((value-s1)/(d1-s1)));
        }

        function dist (s1, d1, s2, d2) {
            return Math.pow(Math.pow(s1-s2, 2) + Math.pow(d1-d2, 2), 1/2);
        }

        function draw(ctx) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

            var width = ctx.canvas.width,
                height = ctx.canvas.height;
/*
            var distanceFromCenter = new PVector(window.usermouse.x - width/2, window.usermouse.y - height/2);
            var inhibitBias = 50;
            var inhibitDistance = map(distanceFromCenter.mag(), 0, Math.sqrt(Math.pow(width,2)+Math.pow(height,2)), 0, inhibitBias);
            var inhibitor = new PVector(width/2, height/2).add(distanceFromCenter.normalize().mult(-1*inhibitDistance));
            inset = [];
            var clusters = 10;
            for(var j=0; j<clusters; j++){
                for(var i=0; i<innum; i++){
                    var angle = i*Math.PI*2/innum;
                    inset.push(new Dot(angle,  getRadius.bind(null, ctx), false, map(getRadius(ctx), 130, 860, 1, 3)));
                    var pos = {
                        x : ctx.canvas.width/2 + (getRadius(ctx)+(Math.random()*20-10))*Math.cos(angle),
                        y : ctx.canvas.height/2 + (getRadius(ctx)+(Math.random()*20-10))*Math.sin(angle)
                    };
                    pos = new PVector(pos.x, pos.y);
                    var dir = new PVector(pos.x, pos.y).sub(inhibitor).normalize();
                    var maxCluster = getRadius(ctx)+inhibitBias

                    var dot = inset[inset.length-1];
                    var multRatio = (function(nthCluster){
                        var t = ((clusters)/Math.log(clusters+1))*Math.log(nthCluster+1);
                        return (maxCluster/Math.log(clusters+1))*Math.log(map(inhibitDistance, 0, inhibitBias, nthCluster, t)+1)
                    })(j)
                    dir.mult(multRatio)
                    dot.loc = PVector.add(inhibitor, dir);
                    dot.loc.x += (Math.random()*20)-10;
                    dot.loc.y += (Math.random()*20)-10;

                    var probabilityCluster = Math.pow(j, 2)/(Math.pow(maxCluster, 2)/1000);
                    var currProb = Math.random();
                    if(currProb<probabilityCluster){
                        dot.constrainLoc();
                        dot.display(ctx);
                    }
                }
            }
*/
            outset = [];
            for(var i=0; i<outnum; i++){
                outset.push(new Dot(i * Math.PI * 2 / outnum, getRadius.bind(null, ctx), true, map(getRadius(ctx), 130, 860, 1, 3)));
                var angle = outset[i].angle;
                var pos = {
                    x : ctx.canvas.width/2 + (getRadius(ctx)+(Math.random()*20-10))*Math.cos(angle),
                    y : ctx.canvas.height/2 + (getRadius(ctx)+(Math.random()*20-10))*Math.sin(angle)
                };
                pos = new PVector(pos.x, pos.y);
                var mouse = new PVector(window.usermouse.x, window.usermouse.y);
                var distance = dist(mouse.x, mouse.y, pos.x, pos.y);
                var dir = mouse.copy();
                dir.sub(pos);
                dir.normalize();
                var ratio = PVector.dot(pos, mouse) / (mouse.mag() * pos.mag());
                ratio = isNaN(ratio) ? Math.random() : ratio;
                var size = Math.random()*(distance*ratio);
                var multRatio = map(ratio, 0, 1, 0.1, 0.4);
                multRatio = Math.random()*multRatio*size;
                dir.mult(multRatio);
                //update pos
                outset[i].loc = PVector.add(dir, pos);
                outset[i].constrainLoc();
                outset[i].display(ctx);
            }
            window.requestAnimationFrame(draw.bind(this, ctx))
        }

        init();
    }


    render(){
        return (
            <canvas id="ndf" style={{position:'absolute', top:0}}></canvas>
        )
    }

}

export default NdfCircle
