import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { setHttpHeadereToken } from "@/api/settings";

// Prime
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";       //theme
import "primevue/resources/primevue.min.css";                 //core css
import "primeicons/primeicons.css";     

import ToastService from "primevue/toastservice";
import Button from "primevue/button";
import Toast from "primevue/toast";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";     //optional for column grouping
import Row from "primevue/row";                     //optional for row



        

const app = createApp(App);
app.use(store);
app.use(router);
setHttpHeadereToken();

// Prime
app.use(PrimeVue);
app.component("p-Button", Button);
app.use(ToastService);
app.component("p-Toast", Toast);
app.component("p-DataTable", DataTable);
app.component("p-Column", Column);
app.component("p-ColumnGroup", ColumnGroup);
app.component("p-Row", Row);

app.mount("#app");
