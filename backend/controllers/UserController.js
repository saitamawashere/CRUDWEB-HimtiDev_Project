import User from '../models/UserModel.js';

export async function getUser(req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
}

export async function getUserById(req, res) {
  try {
    const response = await User.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
}

export async function createUser(req, res) {
  try {
    const response = await User.create(req.body);
    res.status(201).json({ msg: 'User created' });
  } catch (err) {
    res.status(201).json({ message: err.message });
  }
}

export async function updateUser(req, res) {
  try {
    const response = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: 'User updated' });
  } catch (err) {
    res.status(201).json({ message: err.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const response = await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err) {
    res.status(201).json({ message: err.message });
  }
}
