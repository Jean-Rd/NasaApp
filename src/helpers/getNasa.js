export const getNasa = async(searchDate, numPage) => {
    
    const api_key = "cGPCkNQDaLuMbw2FSXean4CtxcdhZrXfitdsWLNs";
    // const api_key = "DEMO_KEY";

    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${ searchDate }?page=${ numPage }&api_key=${ api_key }`

    // const url =`https://api.giphy.com/v1/gifs/search?q=${ encodeURI(search) }&limit=7&api_key=aqFsyAQsVAAVIBGQ0P7iyS5fvxK7IgXQ`;

    const request = await fetch(url);
    

    // const { data } = await request.json();
    const { photos } = await request.json();

    // { id, img_src, earth_date,camera }


    const infoPhotos = photos.map(({ id, camera, earth_date, img_src, rover }) => {
         return {
             id: id,
             camera: {
                 name_camera: camera.full_name,
                 id_camera: camera.id
             },
             date: earth_date,
             image_url: img_src,
             rover: {
                 id_rover: rover.id,
                 name_rover: rover.name,
             }
         }
    })


    return infoPhotos;
}
