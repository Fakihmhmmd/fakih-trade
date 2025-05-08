// File: app/page.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Home() {
  return (
    <main className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card className="rounded-2xl shadow-md">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Input Trading Harian</h2>

          <div className="space-y-2">
            <Label>Pair</Label>
            <Input placeholder="Contoh: ETHUSDT" />
          </div>

          <div className="space-y-2">
            <Label>Arah Posisi</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih arah posisi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="long">Long</SelectItem>
                <SelectItem value="short">Short</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Entry Price</Label>
              <Input placeholder="Masukkan entry price" />
            </div>
            <div className="space-y-2">
              <Label>Exit Price</Label>
              <Input placeholder="Masukkan exit price" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Stop Loss</Label>
              <Input placeholder="SL" />
            </div>
            <div className="space-y-2">
              <Label>Take Profit</Label>
              <Input placeholder="TP" />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Checklist Strategi 2 Arah</Label>
            <Textarea placeholder="Jawab checklist: Tren jelas? Konfirmasi ada? RRR 1:1.5? dll." />
          </div>

          <div className="space-y-2">
            <Label>Upload Chart (opsional)</Label>
            <Input type="file" />
          </div>

          <Button className="w-full mt-4">Simpan</Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md">
        <CardContent className="space-y-4">
          <h2 className="text-xl font-bold">Ringkasan Harian</h2>
          <p>Total Profit/Loss: <span className="font-semibold">$0.00</span></p>
          <p>Win Rate: <span className="font-semibold">0%</span></p>
          <p>Rata-rata RRR: <span className="font-semibold">0.0</span></p>
          <p>Jumlah Trade Hari Ini: <span className="font-semibold">0</span></p>
        </CardContent>
      </Card>
    </main>
  );
}
