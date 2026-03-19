interface Identity {
	[key: string]: any
}

export type Role =
	| 'ADMIN'
	| 'CUSTOMER'
	| 'DEVELOPER'
	| 'RESTAURANT'
	| 'RIDER'
	| 'STAFF'

export interface User {
	created_at: string
	email: string
	email_verified: boolean
	id: string
	identities: Identity[]
	name: string
	picture: string
	role: Role
	updated_at: string
}
