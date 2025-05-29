import { useLayoutEffect, useState } from 'react'

export const DEVICE_TYPES = {
	MOBILE: 'mobile',
	TABLET: 'tablet',
	DESKTOP: 'desktop',
} as const

export type DeviceType = (typeof DEVICE_TYPES)[keyof typeof DEVICE_TYPES]

export const BREAKPOINTS = {
	MOBILE: 768,
	TABLET: 1024,
} as const

export const useDeviceType = (breakpoints = BREAKPOINTS): { deviceType: DeviceType } => {
	const [deviceType, setDeviceType] = useState<DeviceType>(DEVICE_TYPES.DESKTOP)

	useLayoutEffect(() => {
		const getDeviceType = (): DeviceType => {
			if (typeof window === 'undefined') return DEVICE_TYPES.DESKTOP

			const width = window.innerWidth
			if (width < breakpoints.MOBILE) return DEVICE_TYPES.MOBILE
			if (width < breakpoints.TABLET) return DEVICE_TYPES.TABLET
			return DEVICE_TYPES.DESKTOP
		}

		const handleResize = () => setDeviceType(getDeviceType())

		handleResize()

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [breakpoints.MOBILE, breakpoints.TABLET])

	return { deviceType }
}
