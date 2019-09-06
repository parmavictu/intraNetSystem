<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" >
        <div class="modal-containerConfirmDel">
             
          <div class="modal-header">
              
            <slot name="header">
              <span class="header-change-password">Remover</span>
              <div class="close-container-pass">
                    <a href @click.prevent='closeConfirmPass'><div class="close-modal-pass">x</div></a>
                </div>
                
            </slot>
           
            
          </div>

          <div class="modal-body">
            <slot name="body">
                <span class='labels-cp' >Você tem certeza que quer excluir? </span>
               
                 <div class="buttons-confirmDelete">
                    <b-button class="confirmDelete-button" variant="danger" @click="confirmDel" >Remover</b-button>
                    <b-button class="confirmDelete-button" variant="secondary"  @click='closeConfirmPass'>Cancelar</b-button>
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
    name:'ConfirmDelete',
    
    methods:{
      confirmDel(){
        this.$emit('confirmDelPost')
      },
      closeConfirmPass() {
        this.$emit('closeConfirmPass')
      }
    }
}
</script>


<style>
    .confirmDelete-button{
      margin-left: 15px;
      width: 100px;
      height: 45px;
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

    .modal-containerConfirmDel {
        
        width: 400px;
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

    .modal-enter .modal-containerPass,
    .modal-leave-active .modal-containerPass {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        
    }

    .labels-cp{
      font-size: 1.2rem;
      
    }

    .buttons-confirmDelete{
      margin-top: 30px;
      display: flex;
      justify-content: flex-end;
    }
</style>