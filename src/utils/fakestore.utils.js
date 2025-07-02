export const adaptFakestore = ({ id, title, price, description, image, category}) => ({
    id,
    title,
    precio: price,
    description,
    category,
    img: image,
})