const CURRENTOPENEDALBUM = 'CURRENTOPENEDALBUM';

export const openAlbum = (payload) =>{
    return {
        type: CURRENTOPENEDALBUM,
        payload
    }
}