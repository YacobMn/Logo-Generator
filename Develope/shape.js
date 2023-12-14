class Shape{
    constructor(color, text, textColor){
        this.color = color,
        this.text = text,
        this.textColor = textColor
    }
    renderShape(){
        return `<circle cx="200" cy="100" r="80" fill="${this.color}" />`
    }
    render(){
        return `<svg version="1.1" width="400" height="200" xmlns="http://www.w3.org/2000/svg">
         
        ${this.renderShape()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`

    }
}
class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    renderShape(){
       return `<rect width="150" height="150" style="${this.color}" />` 
    }
}

class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    renderShape(){
       return `<polygon points="200,10 250,190 200,210" style="${this.color}" />` 
    }
}
class Circle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor)
    }
    renderShape(){
       return `<circle cx="150" cy="100" r="80" fill="${this.color}/>` 
    }
}


module.exports = {Triangle, Circle, Square}


