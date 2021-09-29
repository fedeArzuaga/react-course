// request
//     .then( response => response.json())
//     .then( ({ data }) => {

//         const {url} = data.images.original
//         const image = document.createElement('img');
//         image.src = url;

//         document.body.append(image);

//         console.log(url);

//     })
//     .catch( console.warn )

const getImage = async () => {

    try {

        const api_key = 'JVbdq172Ie8TKHGMT8iwF29LgmfQmKpu';

        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);

        const { data } = await response.json();

        const {url} = data.images.original
        const image = document.createElement('img');
        image.src = url;

        document.body.append(image);

    } catch ( error ) {

        console.error(error);

    }

}

getImage();