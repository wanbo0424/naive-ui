import { mount } from '@vue/test-utils'
import { NPagination } from '../index'

describe('n-pagination', () => {
  it('should work with import on demand', () => {
    mount(NPagination)
  })
  it('props.itemCount', async () => {
    const wrapper = mount(NPagination, {
      props: {
        itemCount: 1,
        pageSize: 10
      }
    })
    expect(wrapper.findAll('.n-pagination-item').length).toEqual(3)
    await wrapper.setProps({
      itemCount: 11
    })
    expect(wrapper.findAll('.n-pagination-item').length).toEqual(4)
  })
  it('should work with fast-prev slot', async () => {
    const wrapper = mount(NPagination, {
      slots: {
        'fast-prev': () => 'fastPrev'
      }
    })
    expect(wrapper.find('.n-pagination-item').text()).toContain('fastPrev')
  })
})
