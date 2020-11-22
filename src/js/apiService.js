
export default class apiService {
    constructor() {
        this.searchImg = 1;
        this.startPage = 1;
        this.per_page = 12;
        /* this.MY_KEY = '19219612-10b40d6746041ffd691397b9a'; */
    }
    
  
    
    fetchApi() {

        const MY_KEY = '19219612-10b40d6746041ffd691397b9a';

        return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchImg}&page=${this.startPage}&per_page=${this.per_page}&key=${MY_KEY}`)
            .then(response => response.json())
            .then(e => {
                console.log(e);
                this.inrementPage();
                return e;
            }
                
            );
    }

    inrementPage() {
        this.page += 1;
    }

    resetPage() {
        this.page = 1;
    }

    get img() {
        return this.searchImg;
    }
    set img(newImg) {
        this.searchImg = newImg;
    }              
    
}


    