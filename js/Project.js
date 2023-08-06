class Project{
    constructor(title, name, desc, imgs){
        this.title = title;
        this.name = name;
        this.desc = desc;
        this.imgs = imgs;
        this.isSelected = false;
    }
    toggle(){
        this.isSelected = !this.isSelected;
    }
}
