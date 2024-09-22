import React from 'react'
import BaseSelect, { createFilter, components } from 'react-select'
import type { StylesConfig, Options } from 'react-select'

type OptionType = { value: string; label: string }

interface Props {
  options: Options<OptionType>
  allowClear?: boolean
}

const filterConfig = createFilter<OptionType>({
  stringify: (option) => option.label,
})

const ReactSelect = React.forwardRef<any, Props>(
  ({ options, allowClear }, ref) => {
    const stylesConfig: StylesConfig<OptionType> = {
      container: (base) => ({
        ...base,
        maxWidth: 300,
      }),
      control: (base, props) => ({
        ...base,
        color: '#2b2c2e',
        borderColor: props.isFocused ? '#2b2c2e' : '#ccc',
        cursor: 'pointer',
        boxShadow: props.isFocused ? '0 0 0 3px rgba(42, 43, 46, 0.1)' : 'none',
        ':hover': {
          borderColor: '#2b2c2e',
        },
      }),
      placeholder: (base) => ({
        ...base,
        color: '#808080',
      }),
      input: (base) => ({
        ...base,
        color: 'inherit',
      }),
      singleValue: (base, props) => ({
        ...base,
        color: props.selectProps.menuIsOpen ? '#808080' : '#2b2c2e',
      }),
      menuList: (base) => ({
        ...base,
        padding: 4,
        borderRadius: 4,
        cursor: 'pointer',
      }),
      option: (base, props) => ({
        ...base,
        width: '100%',
        padding: '8px 4px',
        borderRadius: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        cursor: 'pointer',
        backgroundColor: props.isSelected ? '#ccc' : 'transparent',
        ':hover': {
          backgroundColor: props.isSelected ? '#ccc' : '#f2f2f2',
        },
      }),
      multiValue: (base) => ({
        ...base,
        maxWidth: 100,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }),
    }

    return (
      <BaseSelect
        ref={ref}
        options={options}
        styles={stylesConfig}
        isClearable={allowClear}
        captureMenuScroll={true}
        closeMenuOnScroll={true}
        controlShouldRenderValue={true}
        placeholder="Select something"
        classNamePrefix={'custom'}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: null,
          MultiValue: (props) => {
            const { index, getValue } = props
            const maxToShow = 2
            const overflow = getValue().length - maxToShow

            if (index < maxToShow) {
              return <components.MultiValue {...props} />
            }

            if (index === maxToShow) {
              return <div style={{ marginLeft: '5px' }}>+{overflow}</div>
            }

            return null
          },
        }}
        filterOption={filterConfig}
        isMulti={true}
      />
    )
  }
)

ReactSelect.displayName = 'ReactSelect'

export default ReactSelect
