// controllers/skills.js
import Skill from '../models/skill.js';

export const createSkill = async (req, res) => {
  const { category, name, description, author, departments } = req.body;

  const newSkill = new Skill({
    category,
    name,
    description,
    author,
    departments,
  });

  try {
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateSkill = async (req, res) => {
  const { id } = req.params;
  const { category, name, description, author, departments } = req.body;

  try {
    const updatedSkill = await Skill.findByIdAndUpdate(id, { category, name, description, author, departments }, { new: true });
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSkill = async (req, res) => {
  const { id } = req.params;

  try {
    await Skill.findByIdAndRemove(id);
    res.status(200).json({ message: 'Skill deleted successfully.' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};