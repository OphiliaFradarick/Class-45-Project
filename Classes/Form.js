class Form
{
    constructor(){
        this.title = createImg("assets/IMG-5591.PNG")
        this.playButton = createButton("PLAY")
        this.settingButton = createButton("Settings")
    }

    position(){
        this.title.position(width/2-200,10)
        //this.title.class("title")
        this.title.size(600,600)
        this.playButton.position(width/2-40, height/2-20);
        this.playButton.class("customButton");
        this.settingButton.position(width/2-40, height/2+60);
        this.settingButton.class("customButton");
    }

    display(){
        this.position();
    }
}
