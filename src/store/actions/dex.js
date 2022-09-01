import { 
    ACTION_TYPE_EXCHANGE_SUCCESS, 
    ACTION_TYPE_EXCHANGE_FAILUR,
} from "./types"

export const setExchange = (
    source_currency,
    target_crypto_asset_id, 
    source_amount, 
    target_amount,
) => (dispatch) => {

	dispatch({
		type: ACTION_TYPE_EXCHANGE_SUCCESS,
		payload: {
				sourceCurrency: source_currency,
				targetAmount: target_crypto_asset_id,
				networkFee: source_amount,
				c14Fee: target_amount,
		},
	});
}
