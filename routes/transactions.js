const express = require('express')
const router = express.Router();
const {getTransactions ,deleteTransaction, addTransaction }  = require('../controller/transactionsController');

router.route('/').get(getTransactions).put(addTransaction);
router.route('/:id').delete(deleteTransaction);

module.exports = router;