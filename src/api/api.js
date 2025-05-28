class Api {
    constructor() {
        this.base = '/src/rest-json/';
    }

    request (rest_url, method = 'POST', params = [], form_element = null) {
        const promise = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
        
            const url = `${this.base}${rest_url}`;
        
            xhr.open(method, url, true);

            xhr.responseType = 'json';
        
            xhr.onload = function () {
                resolve(xhr.response);
            }

            let form_data = new FormData();

            if (form_element) {
                form_data = new FormData(form_element);
            }
        
            if (params.length) {
                for (const elem of params) {
                    form_data.append(elem.name, elem.value);
                }
            }   
            
            xhr.send(form_data);
        });

        return promise;
    }

    rest (rest_url, method = 'POST', params = [], form_element = null) {
        return this.request(rest_url, method, params, form_element);
    }
}

export default Api;