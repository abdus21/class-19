

function modal_add(){
   //const samad_modal = document.querySelector('.samad-modal');
    const add_deves = document.querySelector('#add_deves');
   

        // modal
        add_deves.style.display = 'flex';

      
        add_deves.addEventListener('click', function(e){
            if(e.target == this){
                add_deves.style.display = 'none';
            }else{
                add_deves.style.display = 'flex';
            }
        });
}
function modal_view(){
   //const samad_modal = document.querySelector('.samad-modal');
    const view_deves = document.querySelector('#view_deves');

        // modal
        view_deves.style.display = 'flex';

      
        view_deves.addEventListener('click', function(e){
            if(e.target == this){
                view_deves.style.display = 'none';
            }else{
                view_deves.style.display = 'flex';
            }
        });
}
function modal_edit(id){
   //const samad_modal = document.querySelector('.samad-modal');
    const edit_deves = document.querySelector('#edit_deves');

        // modal
        edit_deves.style.display = 'flex';

      
        edit_deves.addEventListener('click', function(e){
            if(e.target == this){
                edit_deves.style.display = 'none';
            }else{
                edit_deves.style.display = 'flex';
            }
        });
        let name = document.querySelector('#e_name')
        let email = document.querySelector('#e_email')
        let cell = document.querySelector('#e_cell')
        let photo = document.querySelector('#e_photo')
        let skills = document.querySelector('#e_skil-load')
        let img_preview = document.querySelector('#img_preview')
        let get_id = document.querySelector('#get_id')

        axios.get(`http://localhost:5050/deves/${id}`).then(res =>{

                  get_id.value = id;
                  name.value = res.data.name;
                  email.value = res.data.email;
                  cell.value = res.data.Cell;
                  photo.value = res.data.photo;
                  skills.value = res.data.skillId;
                  img_preview.setAttribute('src', res.data.photo)
        });
        
                  

}
function modal_delete(id){
   //const samad_modal = document.querySelector('.samad-modal');
    const delete_deves = document.querySelector('#delete_deves');

        // modal
        delete_deves.classList.add('active')

      
        delete_deves.addEventListener('click', function(e){
            if(e.target == this){
                delete_deves.classList.remove('active')
                console.log(delete_deves)
            }else{
                //delete_deves.classList.add('active')
            }
        });
        const cancel_modal = document.querySelector('#cancel_modal');
        const delete_data = document.querySelector('#delete_data');

        cancel_modal.addEventListener('click', function(e){
            e.preventDefault();
            delete_deves.classList.remove('active');
        console.log(delete_deves)
       });
       delete_data.addEventListener('click', function(e){
        e.preventDefault();
        delete_deves.classList.remove('active');

        axios.delete(`http://localhost:5050/deves/${id}`).then(res =>{
            add_new_deveoper()
            console.log(delete_data)
        })
       })

       console.log(id)


}



// select iption div

const skil_load = document.querySelector('#skil-load');

const all_skills = () =>{

axios.get('http://localhost:5050/skill').then(data =>{

    let list = '';
    data.data.map(data =>{
     list += `<option value="${data.id}">${data.name}</option>`
    })
    skil_load.insertAdjacentHTML('beforeend', list);
})
}

all_skills()

// get form

const deves_add_form  = document.querySelector('#deves_add_form');

deves_add_form.addEventListener('submit', function(e){
    e.preventDefault();

    let name = this.querySelector('#name')
    let email = this.querySelector('#email')
    let photo = this.querySelector('#photo')
    let skill = this.querySelector('#skil-load')
    let Cell = this.querySelector('#cell')

    if(name.value == '' || email.value == '' || photo.value == '' || skill.value == '' || Cell.value == ''){
        alert('All fields are required!')
    }else{
        axios.post('http://localhost:5050/deves', {
            id   : "",
            name : name.value,
            email : email.value,
            photo : photo.value,
            skillId : skill.value,
            Cell  : Cell.value
        }).then(res =>{
            add_new_deveoper()
        });
       
    }
      this.querySelector('#name').value = '';
      this.querySelector('#email').value = '';
      this.querySelector('#photo').value = '';
      //this.querySelector('#skil-load').value = '';
      this.querySelector('#cell').value = '';
});





//add_new_deveoper
const table_data = document.querySelector('#table_data');
const add_new_deveoper = () =>{

    axios.get('http://localhost:5050/deves').then(res =>{
        let add_data = '';

        res.data.map( (data, index) =>{
            add_data += `
            <tr>
            <td>${index + 1}</td>
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>0193883888</td>
            <td><img src="${data.photo}" style="object-fit:cover; width:50px; height:50px" alt=""></td>
            <td><a  onclick="modal_view()" class="btn btn-info btn-sm" href="#"><i class="fa-solid fa-eye"></i></a></td>
            <td><a  onclick="modal_edit(${data.id})" class="btn btn-warning btn-sm" href="#"><i class="fa-solid fa-pen-to-square"></i></a></td>
            <td><a  onclick="modal_delete(${data.id})" class="btn btn-danger btn-sm" href="#"><i class="fa-solid fa-trash"></i></a></td>
        </tr>
            `
        });

        table_data.innerHTML = add_data;
    })
}

add_new_deveoper();


//deves_edit_form

const deves_edit_form = document.querySelector('#deves_edit_form')

deves_edit_form.addEventListener('submit', function(e){
    e.preventDefault();

        let name = document.querySelector('#e_name')
        let email = document.querySelector('#e_email')
        let cell = document.querySelector('#e_cell')
        let photo = document.querySelector('#e_photo')
        let skills = document.querySelector('#e_skil-load')


        axios.patch(`http://localhost:5050/deves/${get_id.value}`,{
            id   : "",
            name : name.value,
            email : email.value,
            photo : photo.value,
            skillId : skills.value,
            Cell  : cell.value
        }).then(res =>{
            add_new_deveoper()
        });

        this.querySelector('#name').value = '';
        this.querySelector('#email').value = '';
        this.querySelector('#photo').value = '';
        //this.querySelector('#skil-load').value = '';
        this.querySelector('#cell').value = '';
})



