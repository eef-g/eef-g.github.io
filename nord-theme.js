
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const nordTheme: CustomThemeConfig = {
    name: 'nord',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "var(--color-primary-50)",
		// =~= Theme Colors  =~=
		// primary | #5e81ac 
		"--color-primary-50": "231 236 243", // #e7ecf3
		"--color-primary-100": "223 230 238", // #dfe6ee
		"--color-primary-200": "215 224 234", // #d7e0ea
		"--color-primary-300": "191 205 222", // #bfcdde
		"--color-primary-400": "142 167 197", // #8ea7c5
		"--color-primary-500": "94 129 172", // #5e81ac
		"--color-primary-600": "85 116 155", // #55749b
		"--color-primary-700": "71 97 129", // #476181
		"--color-primary-800": "56 77 103", // #384d67
		"--color-primary-900": "46 63 84", // #2e3f54
		// secondary | #81a1c1 
		"--color-secondary-50": "236 241 246", // #ecf1f6
		"--color-secondary-100": "230 236 243", // #e6ecf3
		"--color-secondary-200": "224 232 240", // #e0e8f0
		"--color-secondary-300": "205 217 230", // #cdd9e6
		"--color-secondary-400": "167 189 212", // #a7bdd4
		"--color-secondary-500": "129 161 193", // #81a1c1
		"--color-secondary-600": "116 145 174", // #7491ae
		"--color-secondary-700": "97 121 145", // #617991
		"--color-secondary-800": "77 97 116", // #4d6174
		"--color-secondary-900": "63 79 95", // #3f4f5f
		// tertiary | #88c0d0 
		"--color-tertiary-50": "237 246 248", // #edf6f8
		"--color-tertiary-100": "231 242 246", // #e7f2f6
		"--color-tertiary-200": "225 239 243", // #e1eff3
		"--color-tertiary-300": "207 230 236", // #cfe6ec
		"--color-tertiary-400": "172 211 222", // #acd3de
		"--color-tertiary-500": "136 192 208", // #88c0d0
		"--color-tertiary-600": "122 173 187", // #7aadbb
		"--color-tertiary-700": "102 144 156", // #66909c
		"--color-tertiary-800": "82 115 125", // #52737d
		"--color-tertiary-900": "67 94 102", // #435e66
		// success | #a3be8c 
		"--color-success-50": "241 245 238", // #f1f5ee
		"--color-success-100": "237 242 232", // #edf2e8
		"--color-success-200": "232 239 226", // #e8efe2
		"--color-success-300": "218 229 209", // #dae5d1
		"--color-success-400": "191 210 175", // #bfd2af
		"--color-success-500": "163 190 140", // #a3be8c
		"--color-success-600": "147 171 126", // #93ab7e
		"--color-success-700": "122 143 105", // #7a8f69
		"--color-success-800": "98 114 84", // #627254
		"--color-success-900": "80 93 69", // #505d45
		// warning | #ebcb8b 
		"--color-warning-50": "252 247 238", // #fcf7ee
		"--color-warning-100": "251 245 232", // #fbf5e8
		"--color-warning-200": "250 242 226", // #faf2e2
		"--color-warning-300": "247 234 209", // #f7ead1
		"--color-warning-400": "241 219 174", // #f1dbae
		"--color-warning-500": "235 203 139", // #ebcb8b
		"--color-warning-600": "212 183 125", // #d4b77d
		"--color-warning-700": "176 152 104", // #b09868
		"--color-warning-800": "141 122 83", // #8d7a53
		"--color-warning-900": "115 99 68", // #736344
		// error | #bf616a 
		"--color-error-50": "245 231 233", // #f5e7e9
		"--color-error-100": "242 223 225", // #f2dfe1
		"--color-error-200": "239 216 218", // #efd8da
		"--color-error-300": "229 192 195", // #e5c0c3
		"--color-error-400": "210 144 151", // #d29097
		"--color-error-500": "191 97 106", // #bf616a
		"--color-error-600": "172 87 95", // #ac575f
		"--color-error-700": "143 73 80", // #8f4950
		"--color-error-800": "115 58 64", // #733a40
		"--color-error-900": "94 48 52", // #5e3034
		// surface | #434c5e 
		"--color-surface-50": "227 228 231", // #e3e4e7
		"--color-surface-100": "217 219 223", // #d9dbdf
		"--color-surface-200": "208 210 215", // #d0d2d7
		"--color-surface-300": "180 183 191", // #b4b7bf
		"--color-surface-400": "123 130 142", // #7b828e
		"--color-surface-500": "67 76 94", // #434c5e
		"--color-surface-600": "60 68 85", // #3c4455
		"--color-surface-700": "50 57 71", // #323947
		"--color-surface-800": "40 46 56", // #282e38
		"--color-surface-900": "33 37 46", // #21252e
		
	}
}
