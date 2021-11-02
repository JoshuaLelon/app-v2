
import { memo } from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

const ArrowDownIcon = ({
  className,
  viewBox,
  ...rest
}) => {

  return (
    <SvgIcon viewBox={viewBox || '0 0 24 24'} {...rest} {...{ className }}>
      <path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
    </SvgIcon>
  )
}

export default memo(ArrowDownIcon);
