<template>
  <f7-page>
    <f7-toolbar tabbar bottom>
      <f7-link tab-link="#tab-1" tab-link-active>Home</f7-link>
      <f7-link tab-link="#tab-2">
        <f7-badge color="red">{{ cartItems }}</f7-badge>
        <span class="tabbar-label">Cart</span>
      </f7-link>
    </f7-toolbar>
    <f7-tabs animated swipeable>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <h1 class="heading-2 margin-bottom">Vending Machine</h1>
          <div class="product-container">
            <CartItem :products="products" />
          </div>
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <f7-link href="/cart/">Cart </f7-link>
        <Cart />
      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
import Biskuit from "../../images/biskuit.jpg";
import Chips from "../../images/chips.jpg";
import Oreo from "../../images/oreo.jpg";
import Tango from "../../images/tango.jpg";
import Coklat from "../../images/coklat.jpg";
import CartItem from "../components/cartItem";
import Cart from "./cart";
import { mapGetters } from "vuex";
export default {
  components: {
    CartItem,
    Cart,
  },
  data() {
    return {
      products: [
        {
          id: 0,
          description: "Biskuit nikmat dan gurih dari bahan susu",
          title: "Biskuit",
          cover: Biskuit,
          cost: 6000,
          stock: 5
        },
        {
          id: 1,
          description: "Potato Chips dari kentang asli ",
          title: "Chips",
          cover: Chips,
          cost: 8000,
          stock: 5
        },
        {
          id: 2,
          description: "Biskuit Oreo dengan krim susu",
          title: "Oreo",
          cover: Oreo,
          cost: 10000,
          stock: 5
        },
        {
          id: 3,
          description: "Wafer Tango dengan rasa vanilla",
          title: "Tango",
          cover: Tango,
          cost: 12000,
          stock: 5
        },
        {
          id: 4,
          description: "Coklat Cadbury nikmat kelezatan yang sempurna",
          title: "Coklat",
          cover: Coklat,
          cost: 15000,
          stock: 5
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
};
</script>
