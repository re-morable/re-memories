import { describe, it, expect } from "vitest"

import { mount } from "@vue/test-utils"
import HomeMembers from "../HomeMembers.vue"

describe("HomeMembers", () => {
  it("renders properly", () => {
    const wrapper = mount(HomeMembers, { props: { msg: "UwU" } })
    expect(wrapper.text()).toContain("UwU")
  })
})
