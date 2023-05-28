import Decrement from '@/pages/decrement.vue';
import Counter from '@/pages/index.vue';
import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import { useUserStore } from './user';

import { decreaseToken, decreaseTokenBalance } from "@/api";

const fs = require('fs')
const path = require('path')

const packageJsonContent = fs.readFileSync(path.join(__dirname, '../../package.json'), 'utf-8')
const packageJson = JSON.parse(packageJsonContent)

jest.mock("@/api", () => ({
  decreaseTokenBalance: jest.fn().mockResolvedValue("Token balance decreased"),
  decreaseToken: jest.fn().mockResolvedValue(false),
}));

describe('UserStore', () => {
  test("Test the correct installation and configuration of Pinia", () => {
    expect(packageJson.dependencies).toHaveProperty('pinia')
  });
  
  test('Test the management of application state using Pinia', () => {
    const pinia = createPinia()

    const userStore = useUserStore(pinia)

    expect(userStore.token_amount).toBe(100)

    userStore.increment()

    expect(userStore.token_amount).toBe(110)
  });

  test('Test the accurate reflection of state changes in components', () => {
    const pinia = createPinia()

    const userStore = useUserStore(pinia)

    expect(userStore.token_amount).toBe(100)

    const wrapper = mount(Counter, {
      global: {
        plugins: [pinia],
      },
    });

    expect(wrapper.text()).toContain("Token Balance: 100");
  });

  test('Test the button should be visible and accessible to users', () => {

    const wrapper = mount(Counter);

    const button = wrapper.find('#decrement_button');

    expect(button.exists()).toBeTruthy();

    const buttonStyle = window.getComputedStyle(button.element);
    expect(buttonStyle.display).not.toBe('none');
    expect(buttonStyle.visibility).not.toBe('hidden');

    // Check if the button is not disabled
    expect(button.attributes('disabled')).toBeFalsy();
  });

  it("should make a mock API call and decrease token balance upon button press", async () => {

    const pinia = createPinia();
    const wrapper = mount(Decrement, { global: { plugins: [pinia] } });

    const tokenStore = useUserStore();
    expect(tokenStore.token_amount).toBe(100);

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(decreaseTokenBalance).toHaveBeenCalledTimes(1);

    expect(tokenStore.token_amount).toBe(99);

    expect(wrapper.text()).toContain("Token Balance: 99");
  });
  
  test('The updated balance should be displayed to the user', async () => {
    const pinia = createPinia();

    const wrapper = mount(Counter, {
      global: {
        plugins: [pinia],
      },
    });

    const button = wrapper.find('button');

    await button.trigger('click');

    const userStore = useUserStore(pinia)

    expect(userStore.token_amount).toBe(90)

    expect(wrapper.text()).toContain("Token Balance: 90");
  });

  test('An error message should be shown if the API call fails', async () => {
    const pinia = createPinia();
    const wrapper = mount(Decrement, { global: { plugins: [pinia] } });

    const tokenStore = useUserStore();
    expect(tokenStore.errorVisible).toBe(false);

    const button = wrapper.find("#decrement_error_button");
    await button.trigger("click");

    expect(decreaseToken).toHaveBeenCalledTimes(1);

    expect(tokenStore.errorVisible).toBe(true);

    expect(wrapper.text()).toContain("Not enough token");
  });
});