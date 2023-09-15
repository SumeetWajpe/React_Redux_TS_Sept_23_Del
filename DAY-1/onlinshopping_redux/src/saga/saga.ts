import { call, put, takeEvery } from "redux-saga/effects";
import { SagaActions } from "./sagaActions";
import axios, { AxiosResponse } from "axios";
import { ProductModel } from "../models/product.model";
import { setAllProducts } from "../redux/reducers/products.reducer";

function GetAllProducts() {
  return axios.get("http://localhost:3500/products");
}

// worker saga
function* fetchProducts() {
  try {
    const response: AxiosResponse<ProductModel[]> = yield call(GetAllProducts);// place the async call
    if (response.status == 200) {
      yield put(setAllProducts(response.data));
    }
  } catch (e) {
    console.log(e);
  }
}

// watcher saga
export function* mySaga() {
  yield takeEvery(SagaActions.FETCH_ALL_PRODUCTS, fetchProducts);
}
