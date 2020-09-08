import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("Mounted App", () => {
  const wrapper = mount(App);

  it("is a Vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
