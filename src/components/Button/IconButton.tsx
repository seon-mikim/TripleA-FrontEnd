'use client';

import { BsBookmark, BsBookmarkFill, BsFillShareFill } from 'react-icons/bs';
import { ButtonProps } from './Button';
import {
  AiOutlineSearch,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineArrowLeft,
  AiOutlineLeft,
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiOutlineRight,
} from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { TfiExport } from 'react-icons/tfi';
import { RiPencilFill } from 'react-icons/ri';
import { FiSearch, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons/lib';

interface IconButtonProps extends ButtonProps {
  icon:
    | 'heart'
    | 'heartfill'
    | 'bookmark'
    | 'bookmarkfill'
    | 'share'
    | 'arrowleft'
    | 'left'
    | 'down'
    | 'right'
    | 'up'
    | 'check'
    | 'checkfill'
    | 'searchshort'
    | 'x'
    | 'xfill'
    | 'export'
    | 'pencil'
    | IconType;
  iconPosition?: 'left' | 'right';
  iconSize?: string;
}

/**
 *
 *
 * ```tsx
 * import { MdCancel } from 'react-icons/md';
 *
 * // 사용예시
 * <IconButton icon={heart} textColorTheme="orange" bgcolorTheme="none" sizeTheme="icon" iconSize="30px" />
 * <IconButton icon={MdCancel} textColorTheme="orange" bgcolorTheme="none" sizeTheme="icon" iconSize="30px" />
 * ```
 *
 * `icon`: `heart` (\<AiOutlineHeart\>) | `heartfill` (\<AiFillHeart \>) | `bookmark` (\<BsBookmark \>) | `bookmarkfill` (\<BsBookmarkFill\>) | `share` (\<BsFillShareFill\>) | `export` (\<TfiExport\>) | `arrowleft` (\<AiOutlineArrowLeft\>) | `left` (\<AiOutlineLeft\>) | `down` (\<AiOutlineDown\>) | `right` (\<AiOutlineRight\>) | `up` (\<AiOutlineUp\>) | `check`(\<AiOutlineCheckCircle\>) | `checkfill` (\<AiFillCheckCircle\>) | `search` (\<AiOutlineSearch\>) | `searchshort` (\<FiSearch\>) `x` (\<FiX\>) `xfill` (\<MdCancel\>) | `pencil` (\<RiPencilFill\>)
 *
 * @returns JSX.Element
 */
export default function IconButton({
  className,
  fullWidth = false,
  type,
  sizeTheme = 'medium',
  bgColorTheme,
  icon,
  textColorTheme,
  iconPosition = 'left',
  iconSize = '16px',
  children,
  ...props
}: IconButtonProps) {
  const sizeClassNames = {
    small: `h-12 ${fullWidth ? 'w-full' : 'w-28'}`,
    medium: `h-10 ${fullWidth ? 'w-full' : 'w-72'}`,
    large: `h-14 ${fullWidth ? 'w-full' : 'w-40'}`,
    icon: 'h-auto w-auto',
  };

  const backgroundColor = {
    blue: 'bg-blue-500',
    gray: 'bg-gray-600',
    violet: 'bg-[#5645F6]',
    orange: 'bg-[#FD954A]',
    none: 'none',
  };
  const textColor = {
    white: 'text-white',
    black: 'text-black',
    gray: 'text-gray-500',
    orange: 'text-[#FD954A]',
  };

  const presetIcon = {
    heart: <AiOutlineHeart style={{ fontSize: iconSize }} />,
    heartfill: <AiFillHeart />,
    bookmark: <BsBookmark className="text-2xl" />,
    bookmarkfill: <BsBookmarkFill />,
    share: <BsFillShareFill />,
    export: <TfiExport />,
    arrowleft: <AiOutlineArrowLeft />,
    left: <AiOutlineLeft />,
    down: <AiOutlineDown />,
    right: <AiOutlineRight />,
    up: <AiOutlineUp />,
    check: <AiOutlineCheckCircle />,
    checkfill: <AiFillCheckCircle />,
    search: <AiOutlineSearch />,
    searchshort: <FiSearch />,
    x: <FiX />,
    xfill: <MdCancel />,
    pencil: <RiPencilFill />,
  };

  return (
    <button
      className={`flex cursor-pointer items-center justify-center rounded-xl ${textColor[textColorTheme]} ${
        sizeClassNames[sizeTheme]
      } ${backgroundColor[bgColorTheme]} ${className ? ` ${className}` : ''}`}
      type={type}
      {...props}
    >
      <div className={`flex items-center gap-5 ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {typeof icon === 'string'
          ? presetIcon[icon as keyof typeof presetIcon]
          : icon({ style: { fontSize: iconSize } })}
        <span className="break-all text-start">{children}</span>
      </div>
    </button>
  );
}