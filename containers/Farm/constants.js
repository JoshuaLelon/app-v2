export const farmValues = {
	all: 'all',
	joe: 'joe',
	pangulin: 'pangulin',
	stableCoin: 'stableCoin',
	mine: 'mine'
}

export const farms = [
	{
		title: 'All', value: farmValues.all
	},
	{
		title: 'Joe Farms', value: farmValues.joe
	}, {
		title: 'Pangulin Farms', value: farmValues.pangulin
	}, {
		title: 'StableCoin Farms', value: farmValues.stableCoin
	}, {
		title: 'My Farms', value: farmValues.mine
	},

]

export const sortValues = {
	liquidity: 'liquidity',
	poolWeight: 'poolWeight',
	apr: 'apr',
}

export const sortableFields = [

	{
		title: 'Liquidity', value: sortValues.liquidity
	},
	{
		title: 'Pool Weight', value: sortValues.poolWeight
	},
	{
		title: 'APR', value: sortValues.apr
	},
]
