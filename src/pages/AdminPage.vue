<script setup>
import { ref, onMounted, reactive } from "vue";
import CamisetaService from "../services/camisetas";
import MarcasService from "../services/Marcas";
import imageService from '../services/images'


const capaUrl = ref("");
const file = ref(null);
const marcas = ref([]);
const camisetas = ref([]);
const currentCamiseta = reactive({
    nome: "",
    descricao: "",
    tamanho: "",
    valor: "",
    marca: null,
});

function onFileChange(e) {
    file.value = e.target.files[0]
    capaUrl.value = URL.createObjectURL(file.value)
}

async function save() {
    console.log(file.value)
    const image = await imageService.uploadImage(file.value)
    currentCamiseta.capa_attachment_key = image.attachment_key
    await CamisetaService.saveCamisa(currentCamiseta)
    Object.assign(currentCamiseta, {
        nome: '',
        descricao: '',
        tamanho: '',
        valor: '',
        capa_attachment_key: ''
    })
    showForm.value = false
}


onMounted(async () => {
    try {
        const data = await MarcasService.getAllMarcas();
        marcas.value = data;
    } catch (error) {
        console.error("Erro ao obter marcas:", error);
    }
});
</script>

<template>
    <q-page>
        <q-page-container class="q-mb-md">
            <div class="q-pa-md">
                <h2 class="text-h6">Formulário de Cadastro de Camiseta</h2>

                <q-card class="q-mt-md">
                    <q-card-section>
                        <q-form @submit="save">
                            <q-input v-model="currentCamiseta.nome" label="Nome da Camisa" filled outlined
                                class="q-mb-md" />
                            <q-input v-model="currentCamiseta.descricao" label="Descrição" filled outlined
                                class="q-mb-md" />
                            <q-input v-model="currentCamiseta.tamanho" label="Tamanho" filled outlined class="q-mb-md" />
                            <q-input v-model="currentCamiseta.valor" label="Valor" filled outlined class="q-mb-md" />

                            <div class="md:col-span-2">
                                <select v-model="currentCamiseta.marca" class="w-full rounded-md py-2 px-3 ">
                                    <option>Selecione uma marca</option>
                                    <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
                                        {{ marca.nome }}
                                    </option>
                                </select>
                            </div>

                            <input type="file" @change="onFileChange" outlined class="q-mb-md" ref="fileInput" />


                            <div class="q-mb-md" style="max-width: 200px">
                                <q-img :src="capaUrl" />
                            </div>

                            <q-btn type="submit" label="Cadastrar" color="primary" class="q-mt-md" />
                        </q-form>
                    </q-card-section>
                </q-card>
            </div>
        </q-page-container>
    </q-page>
</template>

<style scoped></style>
