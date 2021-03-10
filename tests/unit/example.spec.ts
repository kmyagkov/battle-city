import { shallowMount } from '@vue/test-utils';
import { HighScore } from '@/components/high-score';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HighScore, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
