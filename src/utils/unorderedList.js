class UnorderedList {
    constructor({}) {
        this.array = [...arguments];
        this.list = document.createElement('ul');

        for (let i = 0; i < this.array.length; i++) {
            var item = document.createElement('li');
            item.textContent = this.array[i];
            this.list.appendChild(item);
        }

        console.log(this.list);
        return this.list;
    }
}