const User = require('../models/User');

// Lấy tất cả user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Ẩn password
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi lấy danh sách user', error: error.message });
  }
};

// Lấy chi tiết user theo id
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy user' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi lấy chi tiết user', error: error.message });
  }
};