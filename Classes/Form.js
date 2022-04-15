class Form
{
    constructor(){
        this.title = createImg("assets/IMG-5591.PNG")
        this.playButton = createButton("PLAY")
        this.settingButton = createButton("Settings")
    }

    position(){
        this.title.position(100,50)
        this.title.class("title")
        this.playButton.position(width/2-20, height/-20);
        this.playButton.class("customButton")
    }

    display(){
        this.position()
    }
}