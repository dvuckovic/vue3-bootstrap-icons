import { shallowMount } from '@vue/test-utils';
import BootstrapIcon from '@/BootstrapIcon';
import fileMock from './mocks/fileMock';

describe('BootstrapIcon (SFC)', () => {
    let wrapper;

    it('mounts successfully', () => {
        console.warn = jest.fn();

        wrapper = shallowMount(BootstrapIcon);

        expect(wrapper.find('.bi').exists()).toBe(true);
        expect(wrapper.find('use').attributes('href')).toMatch(`${fileMock}#undefined`);
        expect(console.warn.mock.calls[0][0]).toMatch('Missing required prop: "icon"');
    });

    it('supports the icon prop', async () => {
        const icon = 'exclamation-circle-fill';

        wrapper.setProps({
            icon,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('use').attributes('href')).toMatch(`${fileMock}#${icon}`);
    });

    it('supports the variant prop', async () => {
        const variant = 'danger';

        wrapper.setProps({
            variant,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('.bi').classes()).toContain(`bi--variant-${variant}`);
    });

    it('supports the size prop', async () => {
        const size = 'md';

        wrapper.setProps({
            size,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('.bi').classes()).toContain(`bi--size-${size}`);
    });

    it('supports the flip props', async () => {
        wrapper.setProps({
            flipH: true,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('g').attributes('transform')).toContain('scale(-1 1)');

        wrapper.setProps({
            flipV: true,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('g').attributes('transform')).toContain('scale(-1 -1)');

        wrapper.setProps({
            flipH: false,
            flipV: true,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('g').attributes('transform')).toContain('scale(1 -1)');
    });

    it('supports the rotate prop', async () => {
        const rotate = 90;

        wrapper.setProps({
            rotate,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('g').attributes('transform')).toContain(`rotate(${rotate})`);
    });

    it('supports the animation prop', async () => {
        const animation = 'spin';

        wrapper.setProps({
            animation,
        });

        await wrapper.vm.$nextTick(() => {});

        expect(wrapper.find('.bi').classes()).toContain(`bi--animation-${animation}`);
    });
});
