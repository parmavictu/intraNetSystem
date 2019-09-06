<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" >
        <div class="modal-containerprofileImg">
          <div class="modal-header">
            <slot name="header">
              <span class="header-change-profileImg">Alteração da imagem de perfil</span>
              <div class="close-container-profileImg">
                    <a href @click.prevent='closeModal()'><div class="close-modal-profileImg">x</div></a>
                </div>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body imgprofile-body">
                <div class="container-new-profile-img">
                    <img :src="imgProf" alt="Profile image" class='newImgProfile'>
                </div>
                
                 <div class="profileNewImg-buttons">
                    <b-button class="profileNewImg-button" variant="danger" @click='uploadImg'>Salvar</b-button>
                    <b-button class="profileNewImg-button" variant="secondary"  @click="reset">Cancelar</b-button>
                </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>



<script>


export default {
    name: "ModalPicture",
    props:['imgProf'],
    
    methods:{
        cleanImg(){
            this.emit('clickedCleanImg')
        },
        uploadImg(){
            this.$emit('clickedUploadPicture')
            this.closeModal()
        },
        closeModal(){
            this.$emit('clickedClosePictureModal')
        },
        reset(){
            this.cleanImg()
            this.closeModal()
        }
    }
}
</script>


<style>
    .profileNewImg-buttons{
        position: relative;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
        bottom: -15px;
    }
    .profileNewImg-button{
        margin-left: 15px;
        width: 100px;
        height: 45px;
        
    }
    .container-new-profile-img {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .newImgProfile{
        width: 350px;
        height: 350px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.15);
        margin-bottom: 20px;
    }
    .header-change-profileImg{
        font-size: 1.6rem;
    }
    .close-container-profileImg{
        display: flex;
        text-align: center;
        justify-content: center;
        position: relative;
        right: -25px;
        
    }
    .close-modal-profileImg{
        
        background: #dc3545;
        width: 25px;
        height: 25px;
        color: white;
        margin-bottom: 10px;
        font-size: 1.0rem;
        text-align: center;
        font-weight: bold;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.1);
        border-radius: 15px; 
    }
    .close-container-profileImg a, .close-container-profileImg a:hover {
        text-decoration: none;
    }
    
    .profileImg-modal {
        
        border: 1px solid #bbb;
        width: 100%;
        margin-top: 15px!important; 
        margin-bottom: 25px;
        margin-top: 8px;
        padding: 10px 8px 10px 8px;
        outline: none;
        border-radius: 8px;
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.26);
        border: none;
    }

    
    .modal-mask {
        position: absolute;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .9);
         display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .modal-containerprofileImg {
        
        width: 500px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }
    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-containerprofileImg,
    .modal-leave-active .modal-containerprofileImg {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        
    }
   
    
</style>