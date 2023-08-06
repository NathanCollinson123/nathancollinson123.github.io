class Project{
    constructor(name, desc, imgs){
        this.name = name;
        this.desc = desc;
        this.imgs = imgs;
        this.isSelected = false;
    }
    toggle(){
        this.isSelected = !this.isSelected;
    }
}
