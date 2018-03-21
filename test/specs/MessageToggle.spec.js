import { mount } from '@vue/test-utils'
import MessageToggle from '@/components/MessageToggle.vue'
// import Message from '@/components/Message'

describe('MessageToggle.vue', () => {
  let wrapper
  // const spy = sinon.spy()

  // beforeEach(() => {
  //   wrapper = mount(MessageToggle, {
  //     // Beaware that props is overriden using `propsData`
  //     propsData: {
  //       msg: 'message'
  //     }
  //   })
  // })
  beforeEach(() => {
    wrapper = mount(MessageToggle, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        msg: 'message'
      }
    })
  })

  // it('toggles msg passed to Message when button is clicked', () => {
  //   const button = wrapper.find('#toggle-message')
  //   button.trigger('click')
  //   spy.should.have.been.calledWith('yes')
  //   // expect(button.called).toBe(true)
  //   expect(wrapper.props().msg).toBe('message')
  //   button.trigger('click')
  //   // expect(button.called).toBe(true)
  //   expect(wrapper.props().msg).toBe('toggled message')
  // })

  it('has the expected html structure', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
