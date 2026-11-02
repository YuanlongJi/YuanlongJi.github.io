import unittest
import torch
from model import UBA

class TestUBA(unittest.TestCase):
    def test_shape_and_observation_preservation(self):
        torch.manual_seed(1)
        model = UBA(channels=18).eval()
        values = torch.randn(2, 200, 18)
        mask = torch.zeros_like(values)
        mask[:, :, 6:18] = 1
        inputs = torch.cat([values, mask], dim=-1)
        with torch.no_grad():
            sequence = model.sequence(inputs)
            last = model(inputs)
        self.assertEqual(tuple(sequence.shape), (2, 200, 18))
        self.assertTrue(torch.equal(sequence[..., 6:18], values[..., 6:18]))
        self.assertTrue(torch.allclose(last, sequence[:, -1]))

if __name__ == "__main__":
    unittest.main()
