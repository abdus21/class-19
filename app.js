

function modal_add(){
   //const samad_modal = document.querySelector('.samad-modal');
    const add_deves = document.querySelector('#add_deves');
    const data_show = document.querySelector('.data_show');

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
    const data_show = document.querySelector('.data_show');

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
function modal_edit(){
   //const samad_modal = document.querySelector('.samad-modal');
    const edit_deves = document.querySelector('#edit_deves');
    const data_show = document.querySelector('.data_show');

        // modal
        edit_deves.style.display = 'flex';

      
        edit_deves.addEventListener('click', function(e){
            if(e.target == this){
                edit_deves.style.display = 'none';
            }else{
                edit_deves.style.display = 'flex';
            }
        });
}
function modal_delete(){
   //const samad_modal = document.querySelector('.samad-modal');
    const delete_deves = document.querySelector('#delete_deves');
    const data_show = document.querySelector('.data_show');

        // modal
        delete_deves.style.display = 'flex';

      
        delete_deves.addEventListener('click', function(e){
            if(e.target == this){
                delete_deves.style.display = 'none';
            }else{
                delete_deves.style.display = 'flex';
            }
        });
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

    if(name.value == '' || email.value == '' || photo.value == '' || skill.value == ''){
        alert('All fields are required!')
    }else{
        axios.post('http://localhost:5050/deves', {
            id   : "",
            name : name.value,
            email : email.value,
            photo : photo.value,
            skill : skill.value,
        }).then()
    }
      this.querySelector('#name').value = '';
      this.querySelector('#email').value = '';
      this.querySelector('#photo').value = '';
      this.querySelector('#skil-load').value = '';
})

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
            <td><a  onclick="modal_edit()" class="btn btn-warning btn-sm" href="#"><i class="fa-solid fa-pen-to-square"></i></a></td>
            <td><a  onclick="modal_delete()" class="btn btn-danger btn-sm" href="#"><i class="fa-solid fa-trash"></i></a></td>
        </tr>
            `
        });

        table_data.innerHTML = add_data;
    })
}

add_new_deveoper()