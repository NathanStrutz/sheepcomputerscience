import { mount } from "@vue/test-utils";
import YearsSince from "./YearsSince.vue";
import { expect, vi } from "vitest";

describe("YearsSince.vue", () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-06-15T12:00:00.000"));
  });

  it("counts a zero year gap", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2025" } });
    expect(wrapper.text()).toBe("0");
  });
  it("counts a 1 year gap", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2024" } });
    expect(wrapper.text()).toBe("1");
  });
  it("counts a >1 year gap", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/30/2024" } });
    expect(wrapper.text()).toBe("0");
  });
  it("counts a 25 year gap", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2000" } });
    expect(wrapper.text()).toBe("25");
  });

  it("outputs a correct ordinal for 1 year", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2023" } });
    expect(wrapper.text()).toBe("1st");
  });
  it("outputs a correct ordinal for 2 years", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/30/2023" } });
    expect(wrapper.text()).toBe("2nd");
  });
  it("outputs a correct ordinal for 11 years", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2013" } });
    expect(wrapper.text()).toBe("11th");
  });
  it("outputs a correct ordinal for 13 years", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2011" } });
    expect(wrapper.text()).toBe("13th");
  });
  it("outputs a correct ordinal for 21 years", () => {
    let wrapper = mount(YearsSince, { props: { since: "6/1/2003" } });
    expect(wrapper.text()).toBe("21st");
  });
});
