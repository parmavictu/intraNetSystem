<template>
    <div class="inventoryContainer">
        <div class="inventoryModal">
            <b-form>
            <input type="hidden" id='item-id' v-model='item.id'/>
            <b-row>
                <b-col xs='11'>
                    <b-form-group label='Nome:' class='pointer' label-for='item-name'>
                        <b-form-input id='item-name' type='text' 
                        v-model='item.name' required 
                        placeholder='Informe o Nome do Produto...'/>
                    </b-form-group>
                </b-col>
                <b-col xs='1'>
                    <b-form-group label='Tipo:' label-for='item-type'>
                        <b-form-select id='item-type' type='text' 
                        v-model='item.typeId' required :options="['tipo1','tipo2']"
                        placeholder='Informe o tipo...' />
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs='4'>
                    <b-form-group label='Quantidade:' label-for='item-amount'>
                        <b-form-input id='item-amount' type='number' 
                        v-model='item.amount'  min='0' max='10000'
                        />
                    </b-form-group>
                    
                </b-col>
                <b-col xs='4'>
                    
                    <b-form-group label='Preço:' label-for='item-amount'>
                        <div class='money'>R$</div>
                        <b-form-input id='item-amount'  
                        v-model='item.price'   type='number' min='0' max='10000'
                        />
                    </b-form-group>
                </b-col>
                <b-col xs='4'>
                    <b-form-group label='Fabricação:' label-for='item-fab'>
                        <div class="icon-calendar"><i class="fa fa-calendar"></i></div>
                        <datepicker  id='item-fab'  :language='ptBR' v-model='item.fab'/>
                    </b-form-group>
                </b-col>
                <b-col xs='4'>
                    <b-form-group label='Validade:' label-for='item-val'>
                        <div class="icon-calendar"><i class="fa fa-calendar"></i></div>
                        <datepicker  id='item-val' language='ptBR' v-model='item.val'/>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col xs="12">
                    <b-button variant="primary" 
                        @click='save'>Salvar</b-button>
                    <b-button class='ml-2' @click='reset'>Cancelar</b-button>
                </b-col>
            </b-row>
        </b-form>

            <b-table hover striped :items='items' :fields='fields' >
                
                <template slot='actions' slot-scope="data">
                    <b-button variant='warning' class="mr-2" @click='loadItem(data)'>
                        <i class="fa fa-pencil"></i>
                    </b-button>
                    <b-button variant='danger' class="mr-2" @click='loadItem(data)'>
                        <i class="fa fa-pencil"></i>
                    </b-button>
                </template>
            </b-table>
            <b-pagination size='md' v-model="page" :total-rows="count" :per-page='limit'/>
        </div>
    </div>
    
</template>

<script>
import {ptBR} from 'vuejs-datepicker/dist/locale'
import axios from 'axios'
import datepicker from 'vuejs-datepicker'
import { baseApiUrl, showError } from '@/global'

export default {
    name: "InventoryPage",
    components:{datepicker},
    data: function() {
        return {
            item: {},
            items: [],
            ptBR : ptBR,
            page:1,
            limit:0,
            count:0,
            fields: [
                { key:'id', label: 'Cód', sortable: true},
                { key:'name', label: 'Produto', sortable: true},
                { key:'amount', label: 'Qnt', sortable: true},
                { key:'typename', label: 'Tipo', sortable: true},
                { key:'price', label: 'Preço', sortable: true},
                { key:'fab', label: 'Fabricação', sortable: true},
                { key:'bal', label: 'Validade', sortable: true},
                { key:'aaaa', label: 'Data de alteração', sortable: true},
                { key:'actions', label: 'Ações'}
            ]
        }
    },
    methods:{
        loadItem(item){
            axios.get(`${baseApiUrl}/inventory/${item.id}`)
                .then( res => this.item = res.data)
        },
        loadItems() {
            const url = `${baseApiUrl}/inventory?page=${this.page}`
            axios.get(url).then(res => {
                const itemData= res.data
                
                this.items = itemData.data.map(obj => {
                    obj.price = this.convertMoneyBR(obj.price.toString())
                    return obj
                })
                this.count= itemData.count
                this.limit = itemData.limit
            })
        },
        convertMoneyBR(n) {
                return "R$ " + n.replace('.',',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
        },
        save() {
            const method = this.item.id ? 'put' : 'post'
            const id = this.item.id ? `/${this.item.id}` : ''
            
            
            axios[method](`${baseApiUrl}/inventory${id}`, this.item )
                .then(() => {
                    this.$toasted.global.defaultSucess()
                    this.reset()
                }).catch(showError)
        },
        reset(){
            this.item = {}
            this.loadItems()
        },
         customFormatter(date) {
            date.toISOString()
        }
    },

    watch:{
        page(){
            this.loadItems()
            
        },
        item(){
            console.log(this.item.val.toISOString())
        }
        
    },
    mounted() {
        this.loadItems()
        
    }
}
</script>

<style>
    .inventoryContainer{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .table{
        box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.35);
        border-radius: 5px;
        background-color: #fff;
        padding-bottom : 5px;
        
    }
    td,th {
         box-shadow: 0 1px 3px rgba(155, 148, 148, 0.15);
         
         
         
    }
    th{
        text-align: center;
         vertical-align: middle;
    }
    .page-link {
        width: 50px;
        text-align: center;
         vertical-align: middle;
         font-size: 1.2rem;
    }

    form {
         padding: 25px;
         margin-bottom: 30px;
         box-shadow: 0 2px 6px rgba(0, 0 ,0 , 0.15);
         background-color: #fff;
         border-radius: 5px !important;
    }
    form input {
        border-radius: 10px !important;
        outline: none !important;
        border: 1px solid rgb(185, 183, 183) !important;
        margin-top:3px;
    }
    form input:focus{
        outline:none !important;
        
        box-shadow:none !important;

    }
    #item-type{
        border-radius: 10px !important;
        outline:none !important;
        box-shadow:none !important;
        border:1px solid rgb(185, 183, 183) !important;
        margin-top:3px;
    }
    #item-amount{
        text-align: center;
    }
    .money{
        position: absolute;
        margin-top: 7px;
        margin-left:10px;
        
    }
    #item-val, #item-fab {
        width: 215.67px;
        height: 38px;
        padding: 6px 12px;
        text-align: center;
    }
   
    .form-group{
        margin-top: 10px !important;
    }

    .icon-calendar{
        position: absolute;
        color: grey;
        z-index: 1;
        margin-top: 10px;
        margin-left:10px;
    }

    #pointer {
        cursor: text !important;
    }
    
</style>
