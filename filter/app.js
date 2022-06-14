
const filterItem = document.querySelector(".items");
const filterImg = document.querySelector('.image');

window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains('item')) {
            filterItem.querySelector('.active').classList.remove('active');
            selectedItem.target.classList.add('active');
            let filterName = selectedItem.target.getAttribute('data-name');
            Array.from.filterImg.forEach((image)=>{
                let filterImages = image.getAttribute('data-name');
                console.log(filterImages);
               if ((filterImages == filterName) || filterName == 'all'){
                image.classList.add('show');
               }
               else{
                image.classList.add('hide');
                image.classList.remove('show');
               }
            });
        }
    }
}