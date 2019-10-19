import { tss, tssFrames, tssFont, join, query } from "ts-mini/tss";
const tssMedia__1 = `(min-width: 40rem)`;


const tssCommon__0 = {
  background_color: `#9b4dca`,
  border:           `0.1rem solid #9b4dca`,
  border_radius:    `.4rem`,
  color:            `#fff`,
  cursor:           `pointer`,
  display:          `inline-block`,
  font_size:        `1.1rem`,
  font_weight:      `700`,
  height:           `3.8rem`,
  letter_spacing:   `.1rem`,
  line_height:      `3.8rem`,
  padding:          `0 3.0rem`,
  text_align:       `center`,
  text_decoration:  `none`,
  text_transform:   `uppercase`,
  white_space:      `nowrap`,
}
const tssCommon__1 = {
  background_color: `#606c76`,
  border_color:     `#606c76`,
  color:            `#fff`,
  outline:          `0`,
}
const tssCommon__2 = {
  cursor:  `default`,
  opacity: `.5`,
}
const tssCommon__3 = {
  background_color: `#9b4dca`,
  border_color:     `#9b4dca`,
}
const tssCommon__4 = {
  background_color: `transparent`,
  color:            `#9b4dca`,
}
const tssCommon__5 = {
  background_color: `transparent`,
  border_color:     `#606c76`,
  color:            `#606c76`,
}
const tssCommon__6 = {
  border_color: `inherit`,
  color:        `#9b4dca`,
}
const tssCommon__7 = {
  background_color: `transparent`,
  border_color:     `transparent`,
  color:            `#9b4dca`,
}
const tssCommon__8 = {
  background_color: `transparent`,
  border_color:     `transparent`,
  color:            `#606c76`,
}
const tssCommon__9 = {
  color: `#9b4dca`,
}
const tssCommon__10 = {
  margin_bottom: `1.0rem`,
}

tss({
  SELECTOR:   `=*,*:after,*:before`,
  box_sizing: `inherit`,
}, {
  SELECTOR:   `=html`,
  box_sizing: `border-box`,
  font_size:  `62.5%`,
}, {
  SELECTOR:       `=body`,
  color:          `#606c76`,
  font_family:    `'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,
  font_size:      `1.6em`,
  font_weight:    `300`,
  letter_spacing: `.01em`,
  line_height:    `1.6`,
}, {
  SELECTOR:     `=blockquote`,
  border_left:  `0.3rem solid #d1d1d1`,
  margin_left:  `0`,
  margin_right: `0`,
  padding:      `1rem 1.5rem`,
}, {
  SELECTOR:      `=blockquote *:last-child`,
  margin_bottom: `0`,
}, join({  SELECTOR: `=button,input[type='button'],input[type='reset'],input[type='submit']`,}, tssCommon__0), join({  SELECTOR: `=button:focus,button:hover,input[type='button']:focus,input[type='button']:hover,input[type='reset']:focus,input[type='reset']:hover,input[type='submit']:focus,input[type='submit']:hover`,}, tssCommon__1), join({  SELECTOR: `=button[disabled],input[type='button'][disabled],input[type='reset'][disabled],input[type='submit'][disabled]`,}, tssCommon__2), join({  SELECTOR: `=button[disabled]:focus,button[disabled]:hover,input[type='button'][disabled]:focus,input[type='button'][disabled]:hover,input[type='reset'][disabled]:focus,input[type='reset'][disabled]:hover,input[type='submit'][disabled]:focus,input[type='submit'][disabled]:hover`,}, tssCommon__3), {
  SELECTOR:      `=code`,
  background:    `#f4f5f6`,
  border_radius: `.4rem`,
  font_size:     `86%`,
  margin:        `0 .2rem`,
  padding:       `.2rem .5rem`,
  white_space:   `nowrap`,
}, {
  SELECTOR:    `=pre`,
  background:  `#f4f5f6`,
  border_left: `0.3rem solid #9b4dca`,
  overflow_y:  `hidden`,
}, {
  SELECTOR:      `=pre > code`,
  border_radius: `0`,
  display:       `block`,
  padding:       `1rem 1.5rem`,
  white_space:   `pre`,
}, {
  SELECTOR:   `=hr`,
  border:     `0`,
  border_top: `0.1rem solid #f4f5f6`,
  margin:     `3.0rem 0`,
}, {
  SELECTOR:           `=input[type='email'],input[type='number'],input[type='password'],input[type='search'],input[type='tel'],input[type='text'],input[type='url'],input[type='color'],input[type='date'],input[type='month'],input[type='week'],input[type='datetime'],input[type='datetime-local'],input:not([type]),textarea,select`,
  _webkit_appearance: `none`,
  _moz_appearance:    `none`,
  appearance:         `none`,
  background_color:   `transparent`,
  border:             `0.1rem solid #d1d1d1`,
  border_radius:      `.4rem`,
  box_shadow:         `none`,
  box_sizing:         `inherit`,
  height:             `3.8rem`,
  padding:            `.6rem 1.0rem`,
  width:              `100%`,
}, {
  SELECTOR:     `=input[type='email']:focus,input[type='number']:focus,input[type='password']:focus,input[type='search']:focus,input[type='tel']:focus,input[type='text']:focus,input[type='url']:focus,input[type='color']:focus,input[type='date']:focus,input[type='month']:focus,input[type='week']:focus,input[type='datetime']:focus,input[type='datetime-local']:focus,input:not([type]):focus,textarea:focus,select:focus`,
  border_color: `#9b4dca`,
  outline:      `0`,
}, {
  SELECTOR:      `=select`,
  background:    `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%23d1d1d1" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>') center right no-repeat`,
  padding_right: `3.0rem`,
}, {
  SELECTOR:         `=select:focus`,
  background_image: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 29 14" width="29"><path fill="%239b4dca" d="M9.37727 3.625l5.08154 6.93523L19.54036 3.625"/></svg>')`,
}, {
  SELECTOR:   `=textarea`,
  min_height: `6.5rem`,
}, {
  SELECTOR:      `=label,legend`,
  display:       `block`,
  font_size:     `1.6rem`,
  font_weight:   `700`,
  margin_bottom: `.5rem`,
}, {
  SELECTOR:     `=fieldset`,
  border_width: `0`,
  padding:      `0`,
}, {
  SELECTOR: `=input[type='checkbox'],input[type='radio']`,
  display:  `inline`,
}, {
  SELECTOR:        `=a`,
  color:           `#9b4dca`,
  text_decoration: `none`,
}, {
  SELECTOR: `=a:focus,a:hover`,
  color:    `#606c76`,
}, {
  SELECTOR:     `=dl,ol,ul`,
  list_style:   `none`,
  margin_top:   `0`,
  padding_left: `0`,
}, {
  SELECTOR:  `=dl dl,dl ol,dl ul,ol dl,ol ol,ol ul,ul dl,ul ol,ul ul`,
  font_size: `90%`,
  margin:    `1.5rem 0 1.5rem 3.0rem`,
}, {
  SELECTOR:   `=ol`,
  list_style: `decimal inside`,
}, {
  SELECTOR:   `=ul`,
  list_style: `circle inside`,
}, join({  SELECTOR: `=button,dd,dt,li`,}, tssCommon__10), {
  SELECTOR:      `=fieldset,input,select,textarea`,
  margin_bottom: `1.5rem`,
}, {
  SELECTOR:      `=blockquote,dl,figure,form,ol,p,pre,table,ul`,
  margin_bottom: `2.5rem`,
}, {
  SELECTOR:       `=table`,
  border_spacing: `0`,
  width:          `100%`,
}, {
  SELECTOR:      `=td,th`,
  border_bottom: `0.1rem solid #e1e1e1`,
  padding:       `1.2rem 1.5rem`,
  text_align:    `left`,
}, {
  SELECTOR:     `=td:first-child,th:first-child`,
  padding_left: `0`,
}, {
  SELECTOR:      `=td:last-child,th:last-child`,
  padding_right: `0`,
}, {
  SELECTOR:    `=b,strong`,
  font_weight: `bold`,
}, {
  SELECTOR:   `=p`,
  margin_top: `0`,
}, {
  SELECTOR:       `=h1,h2,h3,h4,h5,h6`,
  font_weight:    `300`,
  letter_spacing: `-.1rem`,
  margin_bottom:  `2.0rem`,
  margin_top:     `0`,
}, {
  SELECTOR:    `=h1`,
  font_size:   `4.6rem`,
  line_height: `1.2`,
}, {
  SELECTOR:    `=h2`,
  font_size:   `3.6rem`,
  line_height: `1.25`,
}, {
  SELECTOR:    `=h3`,
  font_size:   `2.8rem`,
  line_height: `1.3`,
}, {
  SELECTOR:       `=h4`,
  font_size:      `2.2rem`,
  letter_spacing: `-.08rem`,
  line_height:    `1.35`,
}, {
  SELECTOR:       `=h5`,
  font_size:      `1.8rem`,
  letter_spacing: `-.05rem`,
  line_height:    `1.5`,
}, {
  SELECTOR:       `=h6`,
  font_size:      `1.6rem`,
  letter_spacing: `0`,
  line_height:    `1.4`,
}, {
  SELECTOR:  `=img`,
  max_width: `100%`,
});

export const button_outline = tss(join({  SELECTOR: [`=button@`, `=input[type='button']@`, `=input[type='reset']@`, `=input[type='submit']@`],}, tssCommon__4), join({  SELECTOR: [`=button@:focus`, `=button@:hover`, `=input[type='button']@:focus`, `=input[type='button']@:hover`, `=input[type='reset']@:focus`, `=input[type='reset']@:hover`, `=input[type='submit']@:focus`, `=input[type='submit']@:hover`],}, tssCommon__5), join({  SELECTOR: [`=button@[disabled]:focus`, `=button@[disabled]:hover`, `=input[type='button']@[disabled]:focus`, `=input[type='button']@[disabled]:hover`, `=input[type='reset']@[disabled]:focus`, `=input[type='reset']@[disabled]:hover`, `=input[type='submit']@[disabled]:focus`, `=input[type='submit']@[disabled]:hover`],}, tssCommon__6));

export const button_clear = tss(join({  SELECTOR: [`=button@`, `=input[type='button']@`, `=input[type='reset']@`, `=input[type='submit']@`],}, tssCommon__7), join({  SELECTOR: [`=button@:focus`, `=button@:hover`, `=input[type='button']@:focus`, `=input[type='button']@:hover`, `=input[type='reset']@:focus`, `=input[type='reset']@:hover`, `=input[type='submit']@:focus`, `=input[type='submit']@:hover`],}, tssCommon__8), join({  SELECTOR: [`=button@[disabled]:focus`, `=button@[disabled]:hover`, `=input[type='button']@[disabled]:focus`, `=input[type='button']@[disabled]:hover`, `=input[type='reset']@[disabled]:focus`, `=input[type='reset']@[disabled]:hover`, `=input[type='submit']@[disabled]:focus`, `=input[type='submit']@[disabled]:hover`],}, tssCommon__9));

export const button = tss(tssCommon__0, join({  SELECTOR: [`=@:focus`, `=@:hover`],}, tssCommon__1), join({  SELECTOR: `=@[disabled]`,}, tssCommon__2), join({  SELECTOR: [`=@[disabled]:focus`, `=@[disabled]:hover`],}, tssCommon__3), join({  SELECTOR: query(`@%`, button_outline),}, tssCommon__4), join({  SELECTOR: [query(`@%:focus`, button_outline), query(`@%:hover`, button_outline)],}, tssCommon__5), join({  SELECTOR: [query(`@%[disabled]:focus`, button_outline), query(`@%[disabled]:hover`, button_outline)],}, tssCommon__6), join({  SELECTOR: query(`@%`, button_clear),}, tssCommon__7), join({  SELECTOR: [query(`@%:focus`, button_clear), query(`@%:hover`, button_clear)],}, tssCommon__8), join({  SELECTOR: [query(`@%[disabled]:focus`, button_clear), query(`@%[disabled]:hover`, button_clear)],}, tssCommon__9), tssCommon__10);

export const label_inline = tss({
  display:     `inline-block`,
  font_weight: `normal`,
  margin_left: `.5rem`,
});

export const container = tss({
  margin:    `0 auto`,
  max_width: `112.0rem`,
  padding:   `0 2.0rem`,
  position:  `relative`,
  width:     `100%`,
});

export const row_no_padding = tss();

export const column = tss();

export const row_wrap = tss();

export const row_top = tss();

export const row_bottom = tss();

export const row_center = tss();

export const row_stretch = tss();

export const row_baseline = tss();

export const column_offset_10 = tss();

export const column_offset_20 = tss();

export const column_offset_25 = tss();

export const column_offset_33 = tss();

export const column_offset_34 = tss();

export const column_offset_50 = tss();

export const column_offset_66 = tss();

export const column_offset_67 = tss();

export const column_offset_75 = tss();

export const column_offset_80 = tss();

export const column_offset_90 = tss();

export const column_10 = tss();

export const column_20 = tss();

export const column_25 = tss();

export const column_33 = tss();

export const column_34 = tss();

export const column_40 = tss();

export const column_50 = tss();

export const column_60 = tss();

export const column_66 = tss();

export const column_67 = tss();

export const column_75 = tss();

export const column_80 = tss();

export const column_90 = tss();

export const column_top = tss();

export const column_bottom = tss();

export const column_center = tss();

export const row = tss({
  display:        `flex`,
  flex_direction: `column`,
  padding:        `0`,
  width:          `100%`,
}, {
  SELECTOR: query(`@%`, row_no_padding),
  padding:  `0`,
}, {
  SELECTOR: query(`@% > %`, row_no_padding, column),
  padding:  `0`,
}, {
  SELECTOR:  query(`@%`, row_wrap),
  flex_wrap: `wrap`,
}, {
  SELECTOR:    query(`@%`, row_top),
  align_items: `flex-start`,
}, {
  SELECTOR:    query(`@%`, row_bottom),
  align_items: `flex-end`,
}, {
  SELECTOR:    query(`@%`, row_center),
  align_items: `center`,
}, {
  SELECTOR:    query(`@%`, row_stretch),
  align_items: `stretch`,
}, {
  SELECTOR:    query(`@%`, row_baseline),
  align_items: `baseline`,
}, {
  SELECTOR:    query(`@ %`, column),
  display:     `block`,
  flex:        `1 1 auto`,
  margin_left: `0`,
  max_width:   `100%`,
  width:       `100%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_10),
  margin_left: `10%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_20),
  margin_left: `20%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_25),
  margin_left: `25%`,
}, {
  SELECTOR:    [query(`@ %%`, column, column_offset_33), query(`@ %%`, column, column_offset_34)],
  margin_left: `33.3333%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_50),
  margin_left: `50%`,
}, {
  SELECTOR:    [query(`@ %%`, column, column_offset_66), query(`@ %%`, column, column_offset_67)],
  margin_left: `66.6666%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_75),
  margin_left: `75%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_80),
  margin_left: `80%`,
}, {
  SELECTOR:    query(`@ %%`, column, column_offset_90),
  margin_left: `90%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_10),
  flex:      `0 0 10%`,
  max_width: `10%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_20),
  flex:      `0 0 20%`,
  max_width: `20%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_25),
  flex:      `0 0 25%`,
  max_width: `25%`,
}, {
  SELECTOR:  [query(`@ %%`, column, column_33), query(`@ %%`, column, column_34)],
  flex:      `0 0 33.3333%`,
  max_width: `33.3333%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_40),
  flex:      `0 0 40%`,
  max_width: `40%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_50),
  flex:      `0 0 50%`,
  max_width: `50%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_60),
  flex:      `0 0 60%`,
  max_width: `60%`,
}, {
  SELECTOR:  [query(`@ %%`, column, column_66), query(`@ %%`, column, column_67)],
  flex:      `0 0 66.6666%`,
  max_width: `66.6666%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_75),
  flex:      `0 0 75%`,
  max_width: `75%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_80),
  flex:      `0 0 80%`,
  max_width: `80%`,
}, {
  SELECTOR:  query(`@ %%`, column, column_90),
  flex:      `0 0 90%`,
  max_width: `90%`,
}, {
  SELECTOR:   query(`@ % %`, column, column_top),
  align_self: `flex-start`,
}, {
  SELECTOR:   query(`@ % %`, column, column_bottom),
  align_self: `flex-end`,
}, {
  SELECTOR:           query(`@ % %`, column, column_center),
  _ms_grid_row_align: `center`,
  align_self:         `center`,
}, {
  MEDIA:          tssMedia__1,
  flex_direction: `row`,
  margin_left:    `-1.0rem`,
  width:          `calc(100% + 2.0rem)`,
}, {
  MEDIA:         tssMedia__1,
  SELECTOR:      query(`@ %`, column),
  margin_bottom: `inherit`,
  padding:       `0 1.0rem`,
});

export const clearfix = tss({
  SELECTOR: `=@:after`,
  clear:    `both`,
  content:  `' '`,
  display:  `table`,
});

export const float_left = tss({
  float: `left`,
});

export const float_right = tss({
  float: `right`,
});

