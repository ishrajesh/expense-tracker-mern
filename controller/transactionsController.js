const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions  = async (req, res, next) => { 
    try{
        const transaction = await Transaction.find()
        return res.status(200).json({
            success: true,
            count: transaction.length,
            data: transaction,
        })
    }catch (err){
        return res.status(500).json({
            success:false,
            error:'Server Error'
        })
    }
}

// @desc    Add a new transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => { 
    res.send('ADD Transaction');
}

// @desc    Delete a transaction
// @route   DELETE /api/v1/transactions
// @access  Public
exports.deleteTransaction = async (req, res, next) => { 
    res.send('DELETE Transaction');
}